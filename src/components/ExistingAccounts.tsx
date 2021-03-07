import "../css/ExistingAccounts.css";

type ExistingAccountsParameters = {
  avatar: string;
  name: string;
};

export function ExistingAccounts(props: ExistingAccountsParameters) {
  return (
    <div className="containerExistingAccounts">
      <div>
        {props.avatar !== "" ? (
          <img style={{ height: "16rem" }} src={props.avatar} alt="" />
        ) : (
          <img
            style={{ width: 40 }}
            src="img/add-account-tre.png"
            alt="Add account"
          />
        )}
      </div>
      <section>{props.name}</section>
    </div>
  );
}
