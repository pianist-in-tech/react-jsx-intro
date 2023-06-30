
function App() {
    return (
      <div>
        <Person
          name="Gala"
          age={38}
          hobbies={["rowing", "climbing", "eating"]}
        />
        <Person
          name="Nina"
          age={ 65 }
          hobbies={ ["pottery", "reading"] } />
        <Person
          name="Glen"
          age={20}
          hobbies={["reading", "movies"]}
        />
        <Person
          name="Elena"
          age={78}
          hobbies={["knitting", "cooking"]}
        />
      </div>
    );
  }