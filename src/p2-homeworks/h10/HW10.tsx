import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import style from "../../p1-main/m1-ui/u1-app/App.module.css";
import loader from "../../loader.svg"

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(store => store.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };

    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 10</h3>

            <div className={style.container}>
                {loading
                    ? (
                        <div><img src={loader}/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
