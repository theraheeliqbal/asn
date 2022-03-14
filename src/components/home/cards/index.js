import Grid from "../grid";
import List from "../list";
import SkeltonCard from "../../common/skeltonCard";

const MultiSkelton = () => {
  return (
    // Placeholders for lazy loading
    <div className="grid_container" data-testid="lazy-cards">
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
    </div>
  );
};

function Cards({ users, loading, showGrid }) {
  return (
    <>
      {loading ? (
        <MultiSkelton />
      ) : users?.length ? (
        showGrid ? (
          // grid view
          <div className="grid_container" id="grid">
            {users?.map((user) => (
              <Grid key={user.login.uuid} user={user} />
            ))}
            {users?.length % 3 === 2 ? <div className="grid-box"></div> : <></>}
          </div>
        ) : (
          // list view
          <div className="list_container" id="list">
            {users?.map((user) => (
              <List key={user.login.uuid} user={user} />
            ))}
          </div>
        )
      ) : (
        // if users list is empty
        <h3 data-testid="users-missing">Could Not find Users</h3>
      )}
    </>
  );
}

export default Cards;
