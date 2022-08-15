import { ConfigurationCard } from "../../modules"
import { db } from "../../firebase";
import { Configuration } from "../../types/configuration"
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { configuratorAtoms } from "../../states/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { card } from "../../modules/configuration-card/ConfigurationCard.styles";
import { Outlet } from "react-router-dom"

export const Homepage: React.FC = () => {
    const [configurations, setConfigurations] = useState<Configuration[]>([]);
    const navigate = useNavigate();
    const setValue = useSetRecoilState(configuratorAtoms.currentConfiguration);
    const getValue = useRecoilValue(configuratorAtoms.currentConfiguration);

    useEffect(() => {
        setListener();
        console.log(getValue)
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

    function edit(id: string) {
        const config = configurations.find(el => el.id === id)
        if(config){
            setValue(config)
        }

        navigate("/config-view/" + id);
    }

    function renderConfigs() {
        if (configurations.length === 0) {
            return <p>You haven’t configured any cars yet. You may choose to configure some now.</p>
        }

        return (
            <div>
                <h1>View saved configurations</h1>
                {
                    configurations.map((config) => (
                        <ConfigurationCard key={config.id} year={"2022"} car={config.car}
                            color={config.color} date={"Created May 22nd 2022"} edit={() => edit(config.id)} />
                    ))
                }
            </div>
        )
    }

    return (
        renderConfigs()
    )
}