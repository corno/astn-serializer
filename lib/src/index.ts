import { API } from "astn-serializer-api"
import { createAnnotater } from "./esc/createAnnotater"
import { createASTNNormalizer } from "./esc/createASTNNormalizer"
import { createJSONFormatter } from "./esc/createJSONFormatter"
import { createSerializedApostrophedString, createSerializedMultilineString, createSerializedNonWrappedString, createSerializedQuotedString } from "./esc/stringSerialization"

export const $: API = {
    createAnnotater: createAnnotater,
    createASTNNormalizer: createASTNNormalizer,
    createJSONFormatter: createJSONFormatter,
    createSerializedNonWrappedString: createSerializedNonWrappedString,
    createSerializedApostrophedString: createSerializedApostrophedString,
    createSerializedMultilineString: createSerializedMultilineString,
    createSerializedQuotedString: createSerializedQuotedString,
}