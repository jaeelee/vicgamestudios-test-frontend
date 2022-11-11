import data from "assets/dummy_data.json";
import * as CS from "styles/commonStyles";

function InfoJS() {
  const usersInfo = data.data.result;
  const keys = Object.keys(usersInfo[0]);
  console.log(keys);
  return (
    <CS.Main>
      <CS.Section>
        <CS.Table>
          <thead>
            <tr>
              {keys.map((key) => (
                <td key={key}>{key}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersInfo.map((userInfo) => (
              <tr key={userInfo.uid}>
                {keys.map((key) => (
                  <td key={key}>{userInfo[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </CS.Table>
      </CS.Section>
    </CS.Main>
  );
}

export default InfoJS;
