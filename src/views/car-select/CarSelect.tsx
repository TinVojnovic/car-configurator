/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { CarCard } from '../../modules';
import { wrapper, cards } from "./CarSelect.styles"
import { cars } from "../../data/Cars"

export const CarSelect: React.FC = () => {
    return (
        <div css={wrapper}>
            <h2>Configure your car</h2>
            <p>Pick you favorite model and start configuring.</p>
            <div css={cards}>
                {cars !== [] ?
                    cars.map((car) => (
                        <CarCard year={car.year} name={car.name} />
                    )) :

                    <p>No cars available.</p>
                }
                <Outlet />
            </div>
        </div>
    )
}