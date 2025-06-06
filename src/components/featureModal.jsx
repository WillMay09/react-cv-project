{
  showModal && (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2>Add A Custom Field</h2>
        <input
          type="text"
          placeholder="Field Name"
          value={newFieldName}
          onChange={(e) => setNewFieldName(e.target.value)}
        />
        <select
          value={newFieldType}
          onChange={(e) => setNewFieldType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="tel">Phone</option>
          <option value="date">Date</option>
        </select>
        <div className="flex justify-between mt-4">
          <button onClick={handleAddField}>Add</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
