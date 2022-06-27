import * as th from "astn-handlers-api"
import { IAnnotatedHandler } from "./interfaces/IAnnotatedHandler"
import { IFormatInstructionWriter } from "./interfaces/IFormatInstructionWriter"

export type CreateAnnotater = <InTokenAnnotation> (
    handler: IAnnotatedHandler<InTokenAnnotation>,
) => th.ITreeHandler<InTokenAnnotation>

export type CreateASTNNormalizer = <EventAnnotation>(
    $: {
        indentationString: string
        newline: string
    },
    $p: {
        writer: IFormatInstructionWriter<EventAnnotation>
    }
) => IAnnotatedHandler<EventAnnotation>

export type SerializeString = (str: string) => string

export type SerializeMultilineString = (lines: string[], indentation: string) => string

export type API = {
    createAnnotater: CreateAnnotater
    createASTNNormalizer: CreateASTNNormalizer
    createJSONFormatter: <EventAnnotation>(
        indentationString: string,
        newline: string,
        writer: IFormatInstructionWriter<EventAnnotation>,
    ) => IAnnotatedHandler<EventAnnotation>
    createSerializedNonWrappedString: SerializeString
    createSerializedApostrophedString: SerializeString
    createSerializedQuotedString: SerializeString
    createSerializedMultilineString: SerializeMultilineString
}
