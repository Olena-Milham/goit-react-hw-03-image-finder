import { Component } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ImageList } from 'components/ImageList/ImageList';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import { getImages } from 'api/getImages';
import { ToastContainer, toast } from 'react-toastify';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    loading: false,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      getImages(this.state.page, this.state.search)
        .then(({ hits }) =>
          this.setState(prevState => ({
            images: prevState.images.concat(hits),
          }))
        )
        .finally(this.setState({ loading: false }));
    }
  }

  submitHandler({ search }) {
    // if (prevState.search===this.state.search){
    //   toast.warning("Please enter a new query")
    //   return
    // }
    this.setState({ page: 1, search, loading: true });
    getImages(1, search)
      .then(({ total, hits }) => {
        toast.success(`We found ${total} images`);
        this.setState({ images: hits });
      })
      .finally(this.setState({ loading: false }));
  }
  onLoadMoreHandler() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    return (
      <>
        <SearchForm onSubmit={this.submitHandler} />
        <ImageList />
        <PrimaryButton onClick={this.onLoadMoreHandler}>
          Load more
        </PrimaryButton>
        <ToastContainer />
      </>
    );
  }
}
