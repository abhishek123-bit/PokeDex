
function useDeboucing(cb,delay=500){
    let timerId
    return(...args)=>{
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            cb(...args)
        },delay)
    }
}

export default useDeboucing