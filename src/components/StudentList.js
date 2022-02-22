function StudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>Student List</h2>
      {/*return a new array of html element that has p tag 
        and name that we are looping over*/}
      {students.map((name, index) => {
        // index as key is bad practice
        return <p key={index}> {name} </p>;
      })}
    </div>
  );
}

export default StudentList;
