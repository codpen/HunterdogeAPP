import { useState, useEffect } from 'react';
import  { GoogleSpreadsheet }  from 'google-spreadsheet';

import {CLIENT_EMAIL, PRIVATE_KEY, SPREADSHEET_ID } from "../constants";

export const useGoogleSheet = (id) => {
    const [state, setState] = useState({
        data: [],
        error: undefined,
        isLoading: true
    })

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await doc.useServiceAccountAuth({
                    client_email: CLIENT_EMAIL,
                    private_key: PRIVATE_KEY,
                });
                // loads document properties and worksheets
                await doc.loadInfo();
                console.log(doc)
                const sheet = doc.sheetsById[id];
                const rows = await sheet.getRows();

                setState({data: rows, isLoading: false})
            } catch (e) {
                setState({error: e, isLoading: false})
            }
        };
        let timer;
        if (id) {
            fetchSheet()
            timer = setInterval(() => {
                fetchSheet()
            }, 30000)
        } else {
            setState({error: 'You need to set id'})
        }

        return () => clearInterval(timer)
    },[id])

    return state;
}