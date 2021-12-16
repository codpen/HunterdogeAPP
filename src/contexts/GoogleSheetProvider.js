import React, { useState, createContext, useEffect } from "react"
import  { GoogleSpreadsheet }  from 'google-spreadsheet';
import {CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID, SPREADSHEET_ID } from "../constants";

export const GoogleSheetContext = createContext({
    data: [],
    addTokenInfo : () => {}
});

const GoogleSheetContextProvider = (props) => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    const id = SHEET_ID
    const time = 120000
    const [data, setData] = useState([])
    const [state, setState] = useState({
        error: undefined,
        isLoading: true,
    })
    const addTokenInfo = async (tokenAddress, tokenInfo, account, ethereum) => {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[id];
        const rows = await sheet.getRows();
        const row = rows.find(item => {
            return item.Project_Address === tokenAddress
        })
        if (row) {
            Object.keys(tokenInfo).forEach(key => {
                if (key !== 'Project_Manager')  row[key] = tokenInfo[key]
            })            
            await row.save()
            return row
        }
        else {
            let rowData = {}
            Object.keys(tokenInfo).forEach(key => {
                if (key !== 'Project_Manager') rowData[key] = tokenInfo[key]
            })          
            const newRow = await sheet.addRow(rowData)
            return newRow
        }
    }

    useEffect(() => {
        const authorize = async () => {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
        }
        const fetchSheet = async () => {
            try {
                // loads document properties and worksheets
                await doc.loadInfo();
                const sheet = doc.sheetsById[id];
                let rows = await sheet.getRows();
                rows = rows.map((item) => {
                    try {
                        item.Project_Price = Number(item.Project_Price.replace(',', '.')) || 0
                    }catch(e) {
                        item.Project_Price = 0
                    }
                    try {
                        item.Project_Price_24h = Number(item.Project_Price_24h.replace(',', '.')) || 0
                    } catch(e) {
                        item.Project_Price_24h = 0
                    }
                    return item
                })
                
                setData([...rows])
                setState({error: undefined, isLoading: false})
            } catch (e) {
                console.log(e)
                setState({error: e, isLoading: false})
            }
        };
        authorize().then(() => {
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
        });
       
    }, [id])

    return (
        <GoogleSheetContext.Provider value={{ data, addTokenInfo }}>
            {props.children}
        </GoogleSheetContext.Provider>
    )
}
export default GoogleSheetContextProvider