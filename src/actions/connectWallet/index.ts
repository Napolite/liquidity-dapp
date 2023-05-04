const connectWallet = async () => {
    let accounts:any;
    const { ethereum } = window;
  
    return ethereum.request({ method: "eth_requestAccounts" }).then((res: any) => res);
  
  };
  
  export default connectWallet;