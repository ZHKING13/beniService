import React, { useEffect } from "react";
import swal from "sweetalert";
function Cancel() {
     const getBack = (e) =>
         (window.location.href = "https://beniservice.up.railway.app/");
     useEffect(() => {
         swal({
             title: "oops!",
             text: "votre demande n'a pas été envoyé!",
             icon: "error",
             button: "okay",
             closeOnClickOutside: false,
         });
         const params = new URLSearchParams(window.location.search);
         const token = params.get("token");
         console.log(token);
     }, []);
    return (
      
      <div
          style={{
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
      >
          <button className=" btn" onClick={getBack}>
              retour
          </button>
      </div>
  );
}

export default Cancel