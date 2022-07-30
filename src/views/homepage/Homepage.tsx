import { ConfigurationCard } from "../../modules"
import { configurations } from "../../data/Configurations"


//TODO fix the message when there are no configurations (for some reason, it's still trying to read 
//      an empty arrray, but it displays the message)
export const Homepage: React.FC = () => {
    return (
        <div>
            <h1>View saved configurations</h1>
            {configurations !== [] ?
                configurations.map((config) => (
                    <ConfigurationCard year={config.year} name={config.name} color={config.color} date={config.date} />
                )) :

                <p>You haven’t configured any cars yet. You may choose to configure some now.</p>
            }
        </div>
    )
}