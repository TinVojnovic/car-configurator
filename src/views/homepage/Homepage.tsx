/** @jsxImportSource @emotion/react */
import { ConfigurationCard } from "../../modules"
import { db } from "../../firebase";
import { Configuration } from "../../types/configuration"
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, where, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { configuratorAtoms } from "../../states/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { wrapper } from "./Homepage.styles";

export const Homepage: React.FC = () => {
    const [configurations, setConfigurations] = useState<Configuration[]>([]);
    const navigate = useNavigate();
    const setId = useSetRecoilState(configuratorAtoms.configurationId);
    const getId = useRecoilValue(configuratorAtoms.configurationId);
    const setCar = useSetRecoilState(configuratorAtoms.car);
    const setColor = useSetRecoilState(configuratorAtoms.color);
    const setWheels = useSetRecoilState(configuratorAtoms.wheels);
    const setInterior = useSetRecoilState(configuratorAtoms.interior);

    useEffect(() => {
        setListener();
        console.log(getId)
    }, [])

    function setListener() {
        const q = query(collection(db, "configurations"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                const data = item.data()
                const id = item.id;
                console.log(id)
                return {id, ...data} as Configuration;
            });
            
            setConfigurations(items);
        });

        return () => unsubscribe();
    }

    function edit(item: Configuration) {
        const config = configurations.find(el => el.id === item.id)
        if(config){
            setId(getId)
            setCar(config.car)
            setColor(config.color)
            setWheels(config.wheels)
            setInterior(config.interior)
        }

        navigate("/config-view/" + config?.id as string);
    }

    function deleteConfig(item: Configuration){
        deleteDoc(doc(db, "configurations", item.id));
    }

    function renderConfigs() {
        if (configurations.length === 0) {
            return <p>You haven’t configured any cars yet. You may choose to configure some now.</p>
        }

        return (
            <div css={wrapper}>
                <h1>View saved configurations</h1>
                {
                    configurations.map((config) => (
                        <ConfigurationCard key={config.id} year={"2022"} car={config.car}
                            color={config.color} date={"Created May 22nd 2022"} 
                            edit={() => edit(config)} deleteConfig={()=>deleteConfig(config)} />
                    ))
                }
            </div>
        )
    }

    return (
        renderConfigs()
    )
}