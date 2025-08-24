const formatterParams = (searchParams = {}) => {

    const query = new URLSearchParams();
  
    if (searchParams.limit) query.set("limit", searchParams.limit);
    if (searchParams.sort) {
      // Ensure sort is always stringified JSON
      const sortValue =
        typeof searchParams.sort === "object"
          ? JSON.stringify(searchParams.sort)
          : searchParams.sort;
      query.set("sort", sortValue);
    }
    if (searchParams.filters) {
      // Ensure filters are JSON string
      const filterValue =
        typeof searchParams.filters === "object"
          ? JSON.stringify(searchParams.filters)
          : searchParams.filters;
      query.set("filters", filterValue);
    }
  
    return query.toString(); // returns "limit=10&sort={...}&filters={...}"
  };
  
  export default formatterParams;
  