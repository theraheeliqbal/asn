import Grid from "../../components/home/grid";
import GridIcon from "../../assets/icons/grid";
import ListIcon from "../../assets/icons/list";
import ArrowsIcon from "../../assets/icons/arrows";
import SearchBar from "../../components/common/searchBar";
import { useCallback, useEffect, useState } from "react";
import List from "../../components/home/list";
import SkeltonCard from "../../components/common/skeltonCard";

import "./styles.css";

const MultiSkelton = () => {
  return (
    // Placeholders for lazy loading
    <div className="grid_container">
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
    </div>
  );
};

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialUsers, setInitialUsers] = useState([]);
  const [showGrid, setShowGrid] = useState(true);
  const [isAsc, setIsAsc] = useState(false)
  

const sortUsers = () => {
  setIsAsc(!isAsc)
  if(!isAsc){
    let usersCopy = [...users]
    function compare( a, b ) {
      if ( a.name?.first < b.name?.first ){
        return -1;
      }
      if ( a.name?.first > b.name?.first ){
        return 1;
      }
      return 0;
    }
    setUsers(usersCopy.sort( compare ));
  }
  else {
    setUsers([...users].reverse())
  }
}



  const getUsers = useCallback(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setInitialUsers(data.results);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onSearch = (toSearch) => {
    let result = initialUsers.filter((user) => {
      let name = `${user.name.first} ${user.name.last}`;
      return name?.toLowerCase().includes(toSearch?.toLowerCase());
    });
    setUsers(result);
  };

  return (
    <div className="main">
      <h1 className="team-heading">Meet the Team</h1>
      <div className="content_container">
        <div className="actions">
          <div className="search-container">
            <ArrowsIcon cn="hide-on-mobile arrow-icon cp" onClick={sortUsers} />
            <SearchBar onSearch={onSearch} />
          </div>
          {showGrid ? (
            <GridIcon
              cn="hide-on-mobile cp"
              onClick={() => setShowGrid(false)}
            />
          ) : (
            <ListIcon
              cn="hide-on-mobile cp"
              onClick={() => setShowGrid(true)}
            />
          )}
        </div>
        <div className="actions hide-on-desktop cp">
          <ArrowsIcon cn=" arrow-icon" onClick={sortUsers}/>
          {showGrid ? (
            <GridIcon cn="cp" onClick={() => setShowGrid(false)} />
          ) : (
            <ListIcon cn="cp" onClick={() => setShowGrid(true)} />
          )}
        </div>
        {loading ? (
          <MultiSkelton />
        ) : showGrid ? (
          // grid view
          <div className="grid_container" id="grid">
            {users?.map((user) => (
              <Grid key = {user.email} user={user} />
            ))}
            {users?.length % 3 === 2 ? <div className="grid-box"></div> : <></>}
          </div>
        ) : (
          // list view
          <div className="list_container" id="list">
            {users?.map((user) => (
              <List key={user.email} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
