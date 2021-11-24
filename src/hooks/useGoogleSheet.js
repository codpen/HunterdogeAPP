import { useState, useEffect } from 'react';
import  { GoogleSpreadsheet }  from 'google-spreadsheet';

import {CLIENT_EMAIL, PRIVATE_KEY, SPREADSHEET_ID } from "../constants";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const useGoogleSheet = (id, time = 30000) => {
    const [state, setState] = useState({
        data: [],
        error: undefined,
        isLoading: true,
    })

    const addTokenInfo = async (tokenId, tokenInfo) => {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[id];
        const rows = await sheet.getRows();
        const row = rows.find(item => {
            return item.id === tokenId
        })
        if (row) {
            row.info = JSON.stringify(tokenInfo)
            await row.save()
            return row
        }
        else {
            const newRow = await sheet.addRow({
                id: tokenId,
                info: JSON.stringify(tokenInfo)
            })
            return newRow
        }
    }

    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await doc.useServiceAccountAuth({
                    client_email: CLIENT_EMAIL,
                    private_key: PRIVATE_KEY,
                });
                // loads document properties and worksheets
                await doc.loadInfo();
                const sheet = doc.sheetsById[id];
                const rows = await sheet.getRows();

                setState({data: [...rows], error: undefined, isLoading: false})
            } catch (e) {
                setState({data: [], error: e, isLoading: false})
            }
        };
        let timer;
        if (id) {
            fetchSheet()
            if (time) {
                timer = setInterval(() => {
                    fetchSheet()
                }, time)
            }
        } else {
            setState({error: 'You need to set id'})
        }

        return () => clearInterval(timer)
    },[id])

    return { state, addTokenInfo };
}