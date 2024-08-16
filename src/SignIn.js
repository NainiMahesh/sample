import React, { useState } from "react";

const SignIn = () => {
  const [inp, setInp] = useState({ first: " ", last: " " });
  // const [last, setLast] = useState(" ");

  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);

  // const handleOnChange1 = (e) => {
  //   setFirstname(e.target.value);
  // };
  // const handleOnChange2 = (e) => {
  //   setLastname(e.target.value);
  // };

  const submit = (e) => {
    // const allentries = ({ first: first , last: last });
    setData([...data, inp]);
    setInp({ first: " ", last: " " });
    // setData([...data, first]);
    // console.log(data)
    // setUser("")
  };

  const delet = (ele) => {
    const newData = data.filter((e, i) => i !== ele);
    setData(newData);
  };
  const edit = (e, id) => {
    setInp(e);
    setIsUpdate(false);
    // const newEdit = data.map((e,i))
  };
  const updateItem = (id, updatedItem) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <>
      <center style={{ marginTop: "20px" }}>
        <b>FirstName:</b>
        <input
          type="text"
          value={inp.first}
          // name="first"
          onChange={(e) => {
            setInp({ ...inp, first: e.target.value });
          }}
          input
        />
        <b>LastName:</b>
        <input
          type="text"
          value={inp.last}
          // name="last"
          onChange={(e) => {
            setInp({ ...inp, last: e.target.value });
          }}
          input
        />

        {isUpdate ? (
          <button
            onClick={() => {
              submit();
            }}
          >
            {" "}
            submit{" "}
          </button>
        ) : (
          <button
            onClick={(id) => {
              updateItem(id);
            }}
          >
            Update
          </button>
        )}

        {data.map((e, id) => (
          <>
            <div key={id}>
              {e.first} {e.last}
              <button
                onClick={() => {
                  edit(e, id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  delet(id);
                }}
              >
                Delet
              </button>
            </div>
          </>
        ))}
      </center>
    </>
  );
};

export default SignIn;
