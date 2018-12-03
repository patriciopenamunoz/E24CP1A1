require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get color" do
    get pages_color_url
    assert_response :success
  end

end
