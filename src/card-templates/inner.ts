import { ParallelCard } from '../parallel/parallelCard';
import { innerUnit } from './inner-unit';
import { innerNonUnit } from './inner-nonunit';

export function inner(face: ParallelCard) {
    const type = face.type_line;

    if (type.includes('unit')) {
        return innerUnit(face);
    }
    return innerNonUnit(face);
}
