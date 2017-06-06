import * as Model from './../model/comments_pb';
import * as VectorTile from './../model/vector_tile_pb';

function Run() {
    const comment = new Model.comments.Test1({
        field1: 'field one value',
        field2: 32,
        field3: true,
    });

    const encodedComment = Model.comments.Test1.encode(comment).finish();
    const decoded = Model.comments.Test1.decode(encodedComment);
    console.error('Done: ', decoded.field2);
}

export default Run;
