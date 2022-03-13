import { useCallback, useEffect, useState } from "react";

import GridIcon from "../../assets/icons/grid";
import ListIcon from "../../assets/icons/list";
import ArrowsIcon from "../../assets/icons/arrows";
import SearchBar from "../../components/common/searchBar";

import "./styles.css";
import Cards from "../../components/home/cards";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialUsers, setInitialUsers] = useState([]);
  const [showGrid, setShowGrid] = useState(true);
  const [isAsc, setIsAsc] = useState(false);

  const sortUsers = () => {
    if (users) {
      setIsAsc(!isAsc);
      if (!isAsc) {
        let usersCopy = [...users];
        function compare(a, b) {
          if (a.name?.first < b.name?.first) {
            return -1;
          }
          if (a.name?.first > b.name?.first) {
            return 1;
          }
          return 0;
        }
        setUsers(usersCopy.sort(compare));
      } else {
        setUsers([...users].reverse());
      }
    }
  };

  const getUsers = useCallback(async () => {
    try {
      let response = await fetch("https://randomuser.me/api/?results=50");
      response = await response.json();
      setUsers(response.results);
      setInitialUsers(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setUsers(null);
    }
  }, []);

  useEffect(() => {
    document.title = "Meet the team";
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
      <h1 className="team-heading" data-testid="team-heading">
        Meet the Team
      </h1>
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
          <ArrowsIcon cn=" arrow-icon" onClick={sortUsers} />
          {showGrid ? (
            <GridIcon cn="cp" onClick={() => setShowGrid(false)} />
          ) : (
            <ListIcon cn="cp" onClick={() => setShowGrid(true)} />
          )}
        </div>
        <Cards users={users} showGrid={showGrid} loading={loading} />
      </div>
    </div>
  );
}

export default Home;
