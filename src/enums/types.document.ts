export enum DocumentType {
    "CitizenshipCard",
    "ForeignerID",
    "NationalPassport",
    "ForeignPassport",
    "TaxID"
}

export const parseDocumentType = (type: number): DocumentType => {
    switch (type) {
        case DocumentType.CitizenshipCard:
            return DocumentType.CitizenshipCard;
        case DocumentType.ForeignerID:
            return DocumentType.ForeignerID;
        case DocumentType.NationalPassport:
            return DocumentType.NationalPassport;
        case DocumentType.ForeignPassport:
            return DocumentType.ForeignPassport;
        case DocumentType.TaxID:
            return DocumentType.TaxID;
        default:
            return DocumentType.CitizenshipCard;
    }
};
