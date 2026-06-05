import { Nav } from "@/components/Nav";
import { UserMenu } from "../UserMenu";

export const AppBar = () => {
    return (<div className="flex justify-between">
        <Nav />
        <UserMenu />
    </div>);
}