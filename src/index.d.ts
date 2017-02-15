import { IHydraCaseCommentFields, IHydraCaseComment } from './models/comment';
import { ICase, ICase_fields } from './models/case';
import { IShiftMetadata } from './models/skedge/shiftMetadata';

declare namespace hydrajs {
    namespace kase {
        export function getComments(caseNumber: string, fields?: IHydraCaseCommentFields): Promise<Array<IHydraCaseComment>>;
        export function upsertComment(apiComment: IHydraCaseComment): Promise<IHydraCaseComment>;
        export function getCase(caseId: string, fields?: ICase_fields): Promise<ICase>;
    }

    namespace skedge {
        export function getAllShiftMetadatas(): Promise<Array<IShiftMetadata>>;
    }
}

export default hydrajs;
