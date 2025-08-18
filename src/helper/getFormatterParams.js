const formatterParams=(searchParams)=>{
    let query=""
    const{limit,sort,filters}= searchParams;
    if(limit) query = `${query==""?"": query +"&"}limit=${limit}`
    if(sort) query = `${query==""?"": query +"&"}sort=${sort}`
    if(filters) query = `${query==""?"": query +"&"}filters=${filters}`
    return query;
}
export default formatterParams;