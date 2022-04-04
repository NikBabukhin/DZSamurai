import React, {useState} from 'react'
import Affairs from './Affairs'
import style from "../../p1-main/m1-ui/u1-app/App.module.css";


// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else return affairs.filter(el => el.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(el => el._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={style.container__wrapper}>
            <hr/>
            <h3>homeworks 2</h3>

            {/*should work (должно работать)*/}
            <div className={style.container}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
