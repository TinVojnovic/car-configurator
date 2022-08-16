/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { configuratorAtoms, userAtoms } from "../../states/atoms"
import { configuratorSelectors } from "../../states/selectors"
import { footer, info, button, price, total, container } from "./SummaryNavbar.styles"
import { db } from "../../firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

export const SummaryNavbar: React.FC = () => {
    const getPrice = useRecoilValue(configuratorSelectors.totalPrice)
    const navigate = useNavigate()
    const getId = useRecoilValue(configuratorAtoms.configurationId);
    const getCar = useRecoilValue(configuratorAtoms.car);
    const getColor = useRecoilValue(configuratorAtoms.color);
    const getWheels = useRecoilValue(configuratorAtoms.wheels);
    const getInterior = useRecoilValue(configuratorAtoms.interior);
    const getUserId = useRecoilValue(userAtoms.currentUserUid);

    function save() {
        addDoc(collection(db, "configurations"), {
            id: getUserId,
            car: getCar,
            color: getColor,
            wheels: getWheels,
            interior: getInterior
        }).then(() => {
            navigate("/home")
        });
    }

    return (
        <div css={footer}>
            <div>
                <h2>{'<'} 2022 AUDI RS6 AVANT</h2>
            </div>
            <div css={container}>
                <div css={info}>
                    <p css={total}>Total</p>
                    <p css={price}>{getPrice}€</p>
                    <button css={button} onClick={save}>Save your configuration</button>
                </div>
            </div>
        </div>
    )
}