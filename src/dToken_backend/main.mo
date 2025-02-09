import Debug "mo:base/Debug";

actor {
  public func hello(name: Text){
    let greeting = "Hello, " # name # "!";
    Debug.print(greeting);
  };
};
