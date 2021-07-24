import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import itemList from './itemList';


function studentItem(props) {
    const [opt, setopt] = useState(null)
    const [Item, setItem] = useState([])
    const [state, setstate] = useState()
    useEffect(() => {
    setItem(null)
    setstate(null)
    if(props.cat === 'cat00'){console.log('cat00');setopt(itemList.cat00)}
    if(props.cat === 'cat0'){console.log('cat0');setopt(itemList.cat0)}
    if(props.cat === 'cat1'){console.log('cat1');setopt(itemList.cat1)}
    if(props.cat === 'cat2'){console.log('cat2');setopt(itemList.cat2)}
    if(props.cat === 'cat3'){console.log('cat3');setopt(itemList.cat3)}
    if(props.cat === 'cat4'){console.log('cat4');setopt(itemList.cat4)}
    }, [props.cat])
    useEffect(() => {
      console.log(props.item);
      setItem(props.item)
    }, [props.item])

    useEffect(() => {
      props.setitem(Item)
    }, [Item])
    const chnageHandle = (e)=>{
      setItem(Array.isArray(e) ? e.map(x=>x.value):[])
      setstate(e)
    }
    return opt ? <Select isMulti value={state} onChange={chnageHandle} isSearchable placeholder='Items' fluid  selection options={opt} /> : <div>Loading..</div>

}

export default studentItem
