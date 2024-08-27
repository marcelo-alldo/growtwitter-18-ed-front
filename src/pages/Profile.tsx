function Profile() {
  return (
    <div style={{ width: "60vw", height: "100vh", backgroundColor: "#fff", color: "black", border: '0.5px solid #DCDCDC'}}>
      <div style={{ width: "100%", height: "30%", boxSizing: "border-box", padding: "5px", borderBottom: '0.5px solid #DCDCDC'}}>
        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "10%",
              height: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            Botão Voltar
          </div>
          <div
            style={{
              width: "90%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <p style={{fontSize: '18px', fontWeight: '500', margin: '0px'}}>Perfil de @daphne</p>
            <p style={{fontSize: '14px', fontWeight: '400', color: '#848484', margin: '0px'}}>X tweets</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <img
            src=""
            alt=""
            style={{
              backgroundColor: "#be0a0a",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "3px solid gray",
            }}
          />
            <p style={{ margin: "0px" }}>Nome</p>
            <p style={{ margin: "0px" }}>@perfil</p>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "70%"}}
      >
        Tweets
      </div>
    </div>
  );
}

export default Profile;
