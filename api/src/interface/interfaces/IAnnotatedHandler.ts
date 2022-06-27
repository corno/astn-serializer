import { StackContext } from "../types/StackContext"
import * as tokens from "astn-handlers-api"

export type IAnnotatedHandler<InTokenAnnotation> = {
    objectBegin: ($: {
        token: tokens.OpenObjectToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    property: ($: {
        propertyToken: tokens.SimpleStringToken<InTokenAnnotation>
        objectToken: tokens.OpenObjectToken<InTokenAnnotation>
        stackContext: StackContext
        isFirst: boolean
    }) => void
    objectEnd: ($: {
        openToken: tokens.OpenObjectToken<InTokenAnnotation>
        token: tokens.CloseObjectToken<InTokenAnnotation>
        stackContext: StackContext
        isEmpty: boolean
    }) => void
    arrayBegin: ($: {
        token: tokens.OpenArrayToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    element: ($: {
        arrayToken: tokens.OpenArrayToken<InTokenAnnotation>
        stackContext: StackContext
        isFirst: boolean
    }) => void
    arrayEnd: ($: {
        openToken: tokens.OpenArrayToken<InTokenAnnotation>
        token: tokens.CloseArrayToken<InTokenAnnotation>
        stackContext: StackContext
        isEmpty: boolean
    }) => void
    simpleStringValue: ($: {
        token: tokens.SimpleStringToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    multilineStringValue: ($: {
        token: tokens.MultilineStringToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    taggedUnionBegin: ($: {
        token: tokens.TaggedUnionToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    option: ($: {
        token: tokens.SimpleStringToken<InTokenAnnotation>
        stackContext: StackContext
    }) => void
    taggedUnionEnd: ($: {
        stackContext: StackContext
    }) => void
    end: (annotation: InTokenAnnotation) => void
}