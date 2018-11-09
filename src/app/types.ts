
interface Transcript {
  snippet: string
  speaker: string
  time: number
}

interface Utterance {
  snippet: string
  time: number
}

interface CombinedTranscript {
  speaker: string
  utterances: Utterance[]
}

export {
  Transcript,
  CombinedTranscript,
  Utterance
}
