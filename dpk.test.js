const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a the same partition key when a string partition key passed", () => {
    const event = {
      partitionKey: "123456789"
    }
    const validKey = deterministicPartitionKey(event)

    expect(validKey).toBe("123456789")
  })

  it("Returns a stringified version of the key if a non string partition key is passed", () => {
    const event = {
      partitionKey: 123456789
    }
    const validKey = deterministicPartitionKey(event)

    expect(validKey).toBe("123456789")
  })

  it("Returns a ciphered version of the event when an event with no partition key is passed", () => {
    const event = {
      dummyData: "123456789"
    }
    const cipheredEvent = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const validKey = deterministicPartitionKey(event)
    
    expect(validKey).toBe(cipheredEvent)
  })

  it("Returns a ciphered version of the partition key when its length is over 256", () => {
    const event = {
      partitionKey: "285charslengthstring -- 12345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678912345678"
    }
    const cipheredEvent = crypto.createHash("sha3-512").update(event.partitionKey).digest("hex");
    const validKey = deterministicPartitionKey(event)

    expect(validKey).toBe(cipheredEvent)
  })
});
