import { Component, EventEmitter, h, Event } from '@stencil/core';

@Component({
  tag: 'my-form',
  styles: `
    .btn {
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
      padding: .375rem .75rem;
      border: 1px solid transparent;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      cursor: pointer;
    }
  `,
  shadow: true,
})
export class MyForm {

  @Event() formSubmitted: EventEmitter<object>;

  render() {
    return (
      <form onSubmit={(e) => this.submitFormHandler(e)}>
        <h1>Form test</h1>
        <button type="submit" class="btn">Click me to see the event in action</button>
      </form>
    );
  }

  sendDataToServer(): object {
    console.log('Calling the server that does something with the data!');
    return new Promise(resolve => resolve({ id: 'test-' + new Date().getTime() }));
  }

  async submitFormHandler(e) {
    e.preventDefault();
    // Simulates the actual submit
    const data: object = await this.sendDataToServer();
    this.formSubmitted.emit(data);
  }
}
