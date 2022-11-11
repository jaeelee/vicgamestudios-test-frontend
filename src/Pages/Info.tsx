import data from "assets/dummy_data.json";
import * as CS from "styles/commonStyles";

function Info() {
  const usersInfo = data.data.result;
  const keys = Object.keys(usersInfo[0]) as (keyof typeof usersInfo[0])[];

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
                {keys.map((key) => {
                  if (key !== "items")
                    return <td key={key}>{userInfo[key]}</td>;
                  else return <td key={key}></td>;
                })}
              </tr>
            ))}
          </tbody>
        </CS.Table>
      </CS.Section>
    </CS.Main>
  );
}

export default Info;
