export declare abstract class LinkHandler {
    regex: string;
    convert(uri: string): string;
    verify(_uri: string): boolean;
    abstract handle(uri: string): void;
}
