const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const extractCandidateFromEvent = (event) => {
  if (!event) return null
  if (event.partitionKey) return event.partitionKey;
  
  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

const stringifyCandidate = (candidate) => {
  if (!candidate) return TRIVIAL_PARTITION_KEY
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  return candidate
}

const formatCandidate = (candidate) => {
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate
}

exports.deterministicPartitionKey = (event) => {
  let candidate = extractCandidateFromEvent(event)
  candidate = stringifyCandidate(candidate)
  candidate = formatCandidate(candidate)

  return candidate;
};