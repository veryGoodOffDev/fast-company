import React from "react";

const SearchStatus = ({length}) => {
    if(length>0) {return <>
      <h1><span className={length<=0?"badge bg-danger":"badge bg-primary"}>
        {length>1&&length<5?length+" человека тусанут с тобой сегодня":length+" человек тусанет с тобой сегодня"}
        </span></h1>
          </>
          } else {
            return <>
            <h1><span className="badge bg-danger">
              Никто с тобой не тусанет сегодня
              </span></h1>
                </>
          }
    }

export default SearchStatus;