import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    //管理者フラグ
    const [ isAdmin, setIsAdmin ] = useState(false);

    //contextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
    return(
        < AdminFlagContext.Provider value={{isAdmin,setIsAdmin}} >
        {children}
    </AdminFlagContext.Provider>
    )


    /*
    //動作確認のために適当なオブジェクトを定義
    const sampleObj = { sampleValue: "テスト" };

    //AdminFlagContextの中にPRoviderがあるのでそれでchildrenを囲む
    //valueの中にグローバルに扱う実際の値を設定
    return (
        < AdminFlagContext.Provider value={sampleObj} >
            {children}
        </AdminFlagContext.Provider>
    );
    */
};
