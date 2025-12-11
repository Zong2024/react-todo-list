const FilterSelect = ({ filterState, setFilterState }) => {
  return (
    <div className="my-4">
      <label htmlFor="filter-select">Status</label>
      <select
        className="form-select mt-1"
        value={filterState}
        id="filter-select"
        onChange={(e) => {
          setFilterState(e.target.value);
        }}
      >
        <option value="all">全部</option>
        <option value="completed">已完成</option>
        <option value="uncompleted">未完成</option>
      </select>
    </div>
  );
};

export default FilterSelect;
