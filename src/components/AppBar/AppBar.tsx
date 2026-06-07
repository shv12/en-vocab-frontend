import { Nav } from "@/components/Nav";
import { UserMenu } from "../UserMenu";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/redux/selectors";

export const AppBar = () => {
    const { name } = useSelector(userDataSelector);

    return (<div className="flex justify-evenly align-middle">
        <div className="text-4xl flex-grow"><span className="font-bold">Word</span>Master</div>
        <div className="flex-grow content-center">
            {name !== "" && <UserMenu />}
        </div>
        <div className="flex-grow">
            <Nav />
        </div>
    </div>);
}