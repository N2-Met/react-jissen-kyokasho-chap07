//"react"からuseContextをインポート
import { useContext } from "react";

//作成したContextをimport
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = () => {
    // const { isAdmin } = props;

    //Context内のisAdminを取得
    const { isAdmin } = useContext(AdminFlagContext);

    /*
    //useCOntextの引数に参照するContextを指定する
    const contextValue = useContext(AdminFlagContext);
    console.log(contextValue); //{sampleValue:"テスト"}
    */

    //isAdminがfalse(管理者でない)時にボタンを非活性にする。
    return (
        <button style={style} disabled={!isAdmin}>編集</button>
    );
};


