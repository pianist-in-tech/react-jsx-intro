function App() {
    return (
      <div>
        <Tweet
          name="Cat Peter"
          username="catpeter"
          date={new Date().toDateString()}
          message="Hey babe"
        />
        <Tweet
          name="Dog Matt"
          username="dogmatt"
          date={new Date().toDateString()}
          message="never anymore"
        />
        <Tweet
          name="Bad Choice"
          username="badchoice"
          date={new Date().toDateString()}
          message="No tweets for you"
        />
      </div>
    );
  }