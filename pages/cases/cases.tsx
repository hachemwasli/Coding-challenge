import React, { useEffect, useState } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { SideBar } from "../../components/common/SideBar";

import { DataTable } from "../../components/tracking/DataTable";
import { CityDetails, InfectionHistory, InfectionHistoryWithoutIndex } from "../../interfaces/interfaces";

const defaultEndpoint = "https://api.corona-zahlen.org/districts/09162/history/cases/90";


export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default function Cases({ data }) {
    const [infectionData, setInfectionData] = useState<InfectionHistory[]>([]);
    const [city, setCity] = useState<CityDetails>();
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        Object.entries(Object.values(data)[0]).map((e) => {
            const val = e[1];
            setCity({name:val.name,ags:val.ags})
            const withIndex = val.history.map((e:InfectionHistoryWithoutIndex[], i:number) => { return { id: i, ...e } })
            setInfectionData(withIndex);
        })
    }, [data]);

    return (
        <div>
            <Header onMenuBottomClick={(o)=> setOpen(o)}/>
            <div className="city" style={{marginLeft:20}}><h5>City: {city?.name}</h5>
            <h5>Code: {city?.ags}</h5>
            </div>
            <SideBar open={open} onClose={()=>setOpen(!open)}/>
            <DataTable data={infectionData} />
            <Footer />
        </div>
    )

}

