import { EditButton } from "./EditButton"
const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroudColor: "brack",
    display: "flex",
    flexDirection: "columun",
    justifyContente: "center",
    alignItems: "center"
};



/*
//グローバル化前
export const Card = props => {
    //props として管理者フラグを受け取る
    const { isAdmin } = props;
    return (
        <div style={style}>
            <p>山田太郎</p>
            <EditButton isAdmin={isAdmin}></EditButton>
        </div>
    );
};
*/

//グローバル化後(無駄な変数のバケツリレーが無くなった)
export const Card = () => {
    //props として管理者フラグを受け取る
    return (
        <div style={style}>
            <p>山田太郎</p>
            <EditButton/>
        </div>
    );
};
