function NoteDetailPage({ params }: { params: { noteId: string } }) {
  console.log(params.noteId);

  return (
    <div>
      <h1>마이 노트 - {params.noteId}</h1>
    </div>
  );
}

export default NoteDetailPage;
