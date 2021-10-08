import React from "react";
import s from './Details.module.css'
import i from './Info.module.css'

interface InfoProps{
    name: string;
    id: string;
    orgName: string;
    orgLogo: string;
    rateFrom: number;
    creditAmountFrom: number;
    creditAmountTo: number;
    age: number;
    docAmount: number;
    licNum: number;
}

const Info: React.FC<InfoProps> = ({name, id, orgName, orgLogo, rateFrom, creditAmountFrom, creditAmountTo, age, docAmount, licNum}) => {

    return(
        <div className={i.container}>
            <div className={i.wrapper}>
                <div className={s.content}>
                    <div className={s.type}>Организация:</div>
                    <div className={s.description}>{orgName}</div>
                </div>
                <div className={s.content}>
                    <div className={s.type}>Возраст от:</div>
                    <div className={s.description}>{age}</div>
                </div>
                <div className={s.content}>
                    <div className={s.type}>Кол-во документов:</div>
                    <div className={s.description}>{docAmount}</div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={orgLogo} className={i.img} alt={orgName} title={orgName}/>
            </div>
        </div>
    )
}

export default Info;