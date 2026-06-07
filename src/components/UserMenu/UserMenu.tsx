import { useSelector } from "react-redux";
import { userDataSelector } from "@/redux/selectors";

export const UserMenu = () => {
    const userData = useSelector(userDataSelector);

    return <div className="text-center">{userData.name}</div>;
}